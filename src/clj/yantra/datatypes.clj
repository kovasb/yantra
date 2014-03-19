(ns yantra.datatypes)

(defrecord Slider [value range])

(defrecord Column [contents])

(defrecord Graphics [contents])

(defrecord Point [point])

(defrecord Line [points])

(defrecord Disk [point radius])

(defrecord Rectangle [p1 p2])

(defrecord Style [style prims])

(defrecord ListPlot [data opts])

(defrecord ListLinePlot [data opts])

(defrecord BarChart [data opts])