package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BAModifier.eti;BAModifier.eix;BAModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BAModifierVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BAModifier AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BARateFactor> BARateFactorsAsOf(java.util.Date date);
  
  
  void addToBARateFactors(entity.BARateFactor bean);
  
  
  java.util.List<? extends entity.BAModifier> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.BARateFactorVersionList> getBARateFactors();
  
  
  
}