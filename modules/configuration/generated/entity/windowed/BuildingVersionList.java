package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "Building.eti;Building.eix;Building.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BuildingVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.Building AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BuildingImprovement> BuildingImprovementsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BuildingSide> BuildingSidesAsOf(java.util.Date date);
  
  
  void addToBuildingImprovements(entity.BuildingImprovement bean);
  
  
  void addToBuildingSides(entity.BuildingSide bean);
  
  
  java.util.List<? extends entity.Building> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BuildingImprovementVersionList> getBuildingImprovements();
  
  
  java.util.List<? extends entity.windowed.BuildingSideVersionList> getBuildingSides();
  
  
  
}