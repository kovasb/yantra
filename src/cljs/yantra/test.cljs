(ns yantra.test
  (:require
    [yantra.datatypes :as dt]
    [yantra.graphics :as yg]
    [yantra.controls :as yc]
    [yantra.layout :as yl]
    [yantra.edn :as ye]
    [yantra.plot :as yp]
    React
    [om.core :as om :include-macros true]
    [om.dom :as dom :include-macros true]))




(def tests

  { :plot-1 (dt/BarChart. [1 2 6 5 4] {:labels ["a" "b" "c" "d" "e"]})
    :plot-2 (dt/ListLinePlot. [1 2 3 6 5 4 3 1] nil)
    :plot-3 [(dt/ListLinePlot. [1 2 3 6 5 4 3 1] nil) (dt/ListLinePlot. [1 2 3 6 5 4 3 1] nil)]
    :plot-4 (dt/ListLinePlot. [[1 1] [10 4] [11 6] [20 40] [30 5]] nil)

    :graphics-1
           (dt/Column.
             [(dt/Slider.
                4
                [1 10])
              (dt/Slider.
                5
                [1 10])
              (dt/Graphics.
                [(dt/Disk. [0 0] 1)
                 (dt/Disk. [10 2] 1)
                 (dt/Disk. [2 0] 1)
                 (dt/Disk. [20 0] 1)
                 ])])
    :column-1 (dt/Column. [1 2 3])
    :column-2 [(dt/Column. [1 2 3])]

    :edn-0 1
    :edn-1 [1
            "a"
            :a
            'a
            {1 2 3 4}
            (dt/Slider. 4 [1 10])
            #{1 2 3 4}
            (list 1 2 3 4)
            (dt/Graphics.
                                                               [(dt/Disk. [0 0] 1)
                                                                (dt/Disk. [0 2] 1)
                                                                (dt/Disk. [2 0] 1)

                                                                ])]

   })

(def renderers (merge yg/graphics-renderers yc/control-renderers yl/layout-renderers ye/edn-renderers yp/plot-renderers))


(defn builder [x y]
  (.log js/console (om/value x))
  (.log js/console (type (om/value x)))
  (.log js/console (renderers
                     (type (om/value x))))
  (om/build (renderers
                (type (om/value x)))
            x y))


(def t (.getElementById js/document "root"))



(defn ^:export start []
  (let []
    (om/root
      (atom (:plot-4 tests))
      {:builder builder}
      (fn [app owner]
        (builder app {}))
      (.getElementById js/document "root"))))




;; Reference could implement cursor directly
;; can implement own "value" fn to further deref in combinatation with om/value
;; more simply can put in dynamic binding
;; want (:value ref) -> cursor to original module


