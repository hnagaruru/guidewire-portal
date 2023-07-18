package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "CPRateFactor.eti;CPRateFactor.eix;CPRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface CPRateFactorVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.CPRateFactor AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.CPRateFactor> getAllVersions();
  
  
  
}