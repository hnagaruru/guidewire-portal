package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "IMLocation.eti;IMLocation.eix;IMLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface IMLocationVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.IMLocation AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.IMBuilding> BuildingsAsOf(java.util.Date date);
  
  
  void addToBuildings(entity.IMBuilding bean);
  
  
  java.util.List<? extends entity.IMLocation> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.IMBuildingVersionList> getBuildings();
  
  
  
}