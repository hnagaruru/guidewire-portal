package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "ProductModifier.eti;ProductModifier.eix;ProductModifier.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface ProductModifierVersionList extends gw.pl.persistence.core.effdate.EffDatedVersionList {
  entity.ProductModifier AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.ProductRateFactor> ProductRateFactorsAsOf(java.util.Date date);
  
  
  void addToProductRateFactors(entity.ProductRateFactor bean);
  
  
  java.util.List<? extends entity.ProductModifier> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.ProductRateFactorVersionList> getProductRateFactors();
  
  
  
}