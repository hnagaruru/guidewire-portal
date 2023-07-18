package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBlanket.eti;CPBlanket.eix;CPBlanket.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPBlanketVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CPBlanket AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPBuildingCov> BuildingCoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPBlanketCov> CoveragesAsOf(java.util.Date date);
  
  
  void addToBuildingCoverages(entity.CPBuildingCov bean);
  
  
  void addToCoverages(entity.CPBlanketCov bean);
  
  
  java.util.List<? extends entity.CPBlanket> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CPBuildingCovVersionList> getBuildingCoverages();
  
  
  java.util.List<? extends entity.windowed.CPBlanketCovVersionList> getCoverages();
  
  
  
}