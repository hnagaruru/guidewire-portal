package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProductRateFactor.eti;ProductRateFactor.eix;ProductRateFactor.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ProductRateFactorVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.ProductRateFactor AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ProductRateFactor> getAllVersions();
  
  
  
}