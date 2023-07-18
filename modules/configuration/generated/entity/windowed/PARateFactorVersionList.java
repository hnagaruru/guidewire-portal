package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "PARateFactor.eti;PARateFactor.eix;PARateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface PARateFactorVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.PARateFactor AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.PARateFactor> getAllVersions();
  
  
  
}