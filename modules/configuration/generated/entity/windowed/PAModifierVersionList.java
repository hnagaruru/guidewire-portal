package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PAModifier.eti;PAModifier.eix;PAModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PAModifierVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PAModifier AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PARateFactor> PARateFactorsAsOf(java.util.Date date);
  
  
  void addToPARateFactors(entity.PARateFactor bean);
  
  
  java.util.List<? extends entity.PAModifier> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.PARateFactorVersionList> getPARateFactors();
  
  
  
}