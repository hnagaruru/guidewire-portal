package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "GLRateFactor.eti;GLRateFactor.eix;GLRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface GLRateFactorVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.GLRateFactor AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.GLRateFactor> getAllVersions();
  
  
  
}