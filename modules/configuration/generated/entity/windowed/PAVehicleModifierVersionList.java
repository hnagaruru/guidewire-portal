package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAVehicleModifier.eti;PAVehicleModifier.eix;PAVehicleModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PAVehicleModifierVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PAVehicleModifier AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PAVehicleRateFactor> PAVehicleRateFactorsAsOf(java.util.Date date);
  
  
  void addToPAVehicleRateFactors(entity.PAVehicleRateFactor bean);
  
  
  java.util.List<? extends entity.PAVehicleModifier> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PAVehicleRateFactorVersionList> getPAVehicleRateFactors();
  
  
  
}