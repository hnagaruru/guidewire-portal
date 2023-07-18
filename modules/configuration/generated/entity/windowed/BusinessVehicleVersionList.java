package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BusinessVehicle.eti;BusinessVehicle.eix;BusinessVehicle.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BusinessVehicleVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  java.util.List<? extends entity.BAVhcleAddlInterest> AdditionalInterestsAsOf(java.util.Date date);
  
  
  entity.BusinessVehicle AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessVehicleModifier> BusinessVehicleModifiersAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BAStateCovVehicleCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BusinessVehicleCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BALineCovCost> LineCostsAsOf(java.util.Date date);
  
  
  void addToAdditionalInterests(entity.BAVhcleAddlInterest bean);
  
  
  void addToBusinessVehicleModifiers(entity.BusinessVehicleModifier bean);
  
  
  void addToCosts(entity.BAStateCovVehicleCost bean);
  
  
  void addToCoverages(entity.BusinessVehicleCov bean);
  
  
  void addToLineCosts(entity.BALineCovCost bean);
  
  
  java.util.List<? extends entity.windowed.BAVhcleAddlInterestVersionList> getAdditionalInterests();
  
  
  java.util.List<? extends entity.BusinessVehicle> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BusinessVehicleModifierVersionList> getBusinessVehicleModifiers();
  
  
  java.util.List<? extends entity.windowed.BAStateCovVehicleCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.BusinessVehicleCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.BALineCovCostVersionList> getLineCosts();
  
  
  
}