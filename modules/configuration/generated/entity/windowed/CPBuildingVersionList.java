package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPBuilding.eti;CPBuilding.eix;CPBuilding.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPBuildingVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  java.util.List<? extends entity.CPBldgAddlInterest> AdditionalInterestsAsOf(java.util.Date date);
  
  
  entity.CPBuilding AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPBuildingCov> CoveragesAsOf(java.util.Date date);
  
  
  void addToAdditionalInterests(entity.CPBldgAddlInterest bean);
  
  
  void addToCoverages(entity.CPBuildingCov bean);
  
  
  java.util.List<? extends entity.windowed.CPBldgAddlInterestVersionList> getAdditionalInterests();
  
  
  java.util.List<? extends entity.CPBuilding> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CPBuildingCovVersionList> getCoverages();
  
  
  
}