package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAVehicleRateFactor.eti;PAVehicleRateFactor.eix;PAVehicleRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PAVehicleRateFactorVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PAVehicleRateFactor AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PAVehicleRateFactor> getAllVersions();
  
  
  
}