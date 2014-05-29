(ns yantra.controls
  (:require-macros [cljs.core.async.macros :refer [go]])
  (:require
    [yantra.datatypes :as dt]
    React
    cljs.reader
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]

    [cljs.core.async :refer [>! <! chan close! put! take! sliding-buffer dropping-buffer timeout]]))



(def control-renderers
  {dt/Slider
    (fn [cursor owner opts]
      (reify
        om/IRender
        (render [_]
          (let [v (om/value cursor)
               val (:value v)
               r (:range v)
               c (:channel v)
               min (first r)
               max (second r)
               step (if (= 3 (count r)) (last r) 1)]
           (dom/input
             #js {:type         "range"
                  :defaultValue val
                  :min          min
                  :max          max
                  :step         step
                  :onChange (fn [e] (.log js/console e) (if c (put! c (cljs.reader/read-string (.-value (.-target e))))))}
             )))))
   dt/ChannelDisplay
             (fn [cursor owner opts]
               (reify
                 om/IWillMount
                 (will-mount [_]
                   (let [c (:channel (om/value cursor))]
                     (go
                       (loop []
                         (om/update! cursor :value (<! c))
                         (recur)))))
                 om/IRender
                 (render [_]
                   ((om/get-shared owner :builder) (:value (om/value cursor))))))


   } )



