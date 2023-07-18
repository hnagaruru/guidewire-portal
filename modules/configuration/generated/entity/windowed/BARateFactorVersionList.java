package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BARateFactor.eti;BARateFactor.eix;BARateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BARateFactorVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BARateFactor AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BARateFactor> getAllVersions();
  
  
  
}