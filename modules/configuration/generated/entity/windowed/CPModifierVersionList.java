package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPModifier.eti;CPModifier.eix;CPModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPModifierVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CPModifier AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPRateFactor> CPRateFactorsAsOf(java.util.Date date);
  
  
  void addToCPRateFactors(entity.CPRateFactor bean);
  
  
  java.util.List<? extends entity.CPModifier> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.CPRateFactorVersionList> getCPRateFactors();
  
  
  
}