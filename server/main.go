package main

import "vocatio/routes"

func main() {
	r := routes.SetupRoutes()

	r.Run(":8080")
}
