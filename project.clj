(defproject yantra "0.1.1"
  :description "FIXME: write description"
  :url "http://example.com/FIXME"
  :license {:name "Eclipse Public License"
            :url "http://www.eclipse.org/legal/epl-v10.html"}
  :dependencies [[org.clojure/clojure "1.5.1"]
                 [org.clojure/clojurescript "0.0-2138"]
                 [om "0.3.6"]
                 [org.clojure/core.async "0.1.267.0-0d7780-alpha"]]
  :plugins [[lein-cljsbuild "1.0.2"]]
  :source-paths ["src/clj" "src/cljs"]
  :cljsbuild {
               :builds [
                         {:id "test"
                         :source-paths ["src/cljs"]
                         :compiler {
                                     :output-to "test/main.js"
                                     :output-dir "test/out"
                                     :optimizations :whitespace
                                     ;;:source-map true
                                     }}]})




