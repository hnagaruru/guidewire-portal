package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PersonalVehicle.eti;PersonalVehicle.eix;PersonalVehicle.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PersonalVehicleVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  java.util.List<? extends entity.PAVhcleAddlInterest> AdditionalInterestsAsOf(java.util.Date date);
  
  
  entity.PersonalVehicle AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PersonalAutoCovCost> CostsAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PersonalVehicleCov> CoveragesAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.VehicleDriver> DriversAsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PAVehicleModifier> PAVehicleModifiersAsOf(java.util.Date date);
  
  
  void addToAdditionalInterests(entity.PAVhcleAddlInterest bean);
  
  
  void addToCosts(entity.PersonalAutoCovCost bean);
  
  
  void addToCoverages(entity.PersonalVehicleCov bean);
  
  
  void addToDrivers(entity.VehicleDriver bean);
  
  
  void addToPAVehicleModifiers(entity.PAVehicleModifier bean);
  
  
  java.util.List<? extends entity.windowed.PAVhcleAddlInterestVersionList> getAdditionalInterests();
  
  
  java.util.List<? extends entity.PersonalVehicle> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PersonalAutoCovCostVersionList> getCosts();
  
  
  java.util.List<? extends entity.windowed.PersonalVehicleCovVersionList> getCoverages();
  
  
  java.util.List<? extends entity.windowed.VehicleDriverVersionList> getDrivers();
  
  
  java.util.List<? extends entity.windowed.PAVehicleModifierVersionList> getPAVehicleModifiers();
  
  
  
}