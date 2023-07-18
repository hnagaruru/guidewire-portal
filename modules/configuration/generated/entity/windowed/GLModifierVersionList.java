package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLModifier.eti;GLModifier.eix;GLModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLModifierVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GLModifier AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLRateFactor> GLRateFactorsAsOf(java.util.Date date);
  
  
  void addToGLRateFactors(entity.GLRateFactor bean);
  
  
  java.util.List<? extends entity.GLModifier> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.GLRateFactorVersionList> getGLRateFactors();
  
  
  
}