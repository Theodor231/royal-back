help:
	@echo "API"
	@echo "usage: make COMMAND"
	@echo ""
	@echo "Commands:"
	@echo "  docker.start       Create and start containers"
	@echo "  docker.stop        Stop and clear all services"
	@echo "  seed.run           Run seeds"
	@echo "  db.reset           Fresh db and run seeds"

docker.start:
	@docker-compose up -d

docker.stop:
	@docker-compose down -v

seed.run:
	@docker-compose exec api npm run seed:run

db.reset:
	@docker exec -it api npm run seed:all
