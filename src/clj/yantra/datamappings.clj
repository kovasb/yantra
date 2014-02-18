(ns yantra.datamappings
  (:require [yantra.datatypes :as dt]))


(def data-mappings
  [{:record yantra.datatypes.Slider :tag "yantra.controls/Slider"}
   {:record yantra.datatypes.Column :tag "yantra.layout/Column"}
   {:record yantra.datatypes.Graphics :tag "yantra.graphics/Graphics"}
   {:record yantra.datatypes.Point :tag "yantra.graphics/Point"}
   {:record yantra.datatypes.Line :tag "yantra.graphics/Line"}
   {:record yantra.datatypes.Disk :tag "yantra.graphics/Disk"}
   {:record yantra.datatypes.Rectangle :tag "yantra.graphics/Rectangle"}
   {:record yantra.datatypes.Style :tag "yantra.graphics/Style"}])


