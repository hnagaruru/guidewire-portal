package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "WCModifier.eti;WCModifier.eix;WCModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface WCModifierVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.WCModifier AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.WCRateFactor> WCRateFactorsAsOf(java.util.Date date);
  
  
  void addToWCRateFactors(entity.WCRateFactor bean);
  
  
  java.util.List<? extends entity.WCModifier> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.WCRateFactorVersionList> getWCRateFactors();
  
  
  
}