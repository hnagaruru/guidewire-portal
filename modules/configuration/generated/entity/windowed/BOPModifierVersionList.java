package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPModifier.eti;BOPModifier.eix;BOPModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPModifierVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BOPModifier AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPRateFactor> BOPRateFactorsAsOf(java.util.Date date);
  
  
  void addToBOPRateFactors(entity.BOPRateFactor bean);
  
  
  java.util.List<? extends entity.BOPModifier> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BOPRateFactorVersionList> getBOPRateFactors();
  
  
  
}