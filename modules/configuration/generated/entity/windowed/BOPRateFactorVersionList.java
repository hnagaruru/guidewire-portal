package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "BOPRateFactor.eti;BOPRateFactor.eix;BOPRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface BOPRateFactorVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.BOPRateFactor AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.BOPRateFactor> getAllVersions();
  
  
  
}