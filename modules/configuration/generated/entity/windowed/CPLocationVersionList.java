package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPLocation.eti;CPLocation.eix;CPLocation.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPLocationVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CPLocation AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPBuilding> BuildingsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPLocationCov> CoveragesAsOf(java.util.Date date);
  
  
  void addToBuildings(entity.CPBuilding bean);
  
  
  void addToCoverages(entity.CPLocationCov bean);
  
  
  java.util.List<? extends entity.CPLocation> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CPBuildingVersionList> getBuildings();
  
  
  java.util.List<? extends entity.windowed.CPLocationCovVersionList> getCoverages();
  
  
  
}