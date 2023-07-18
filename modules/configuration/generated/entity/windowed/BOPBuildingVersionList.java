package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPBuilding.eti;BOPBuilding.eix;BOPBuilding.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPBuildingVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  java.util.List<? extends entity.BOPBldgAddlInterest> AdditionalInterestsAsOf(java.util.Date date);
  
  
  entity.BOPBuilding AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPCovBuildingCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPBuildingCov> CoveragesAsOf(java.util.Date date);
  
  
  void addToAdditionalInterests(entity.BOPBldgAddlInterest bean);
  
  
  void addToCosts(entity.BOPCovBuildingCost bean);
  
  
  void addToCoverages(entity.BOPBuildingCov bean);
  
  
  java.util.List<? extends entity.windowed.BOPBldgAddlInterestVersionList> getAdditionalInterests();
  
  
  java.util.List<? extends entity.BOPBuilding> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPCovBuildingCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.BOPBuildingCovVersionList> getCoverages();
  
  
  
}