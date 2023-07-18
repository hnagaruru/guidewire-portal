package entity.windowed;

@javax.annotation.Generated(value = "com.guidewire.pl.metadata.codegen.Codegen", comments = "APDRiskCovPricing.eti;APDRiskCovPricing.eix;APDRiskCovPricing.etx")
@java.lang.SuppressWarnings(value = {"deprecation", "unchecked"})
@gw.lang.SimplePropertyProcessing
public interface APDRiskCovPricingVersionList extends entity.windowed.APDPricingVersionList {
  entity.APDRiskCovPricing AsOf(java.util.Date date);
  
  
  java.util.List<? extends entity.APDExposurePrice> ExposurePricesAsOf(java.util.Date date);
  
  
  void addToExposurePrices(entity.APDExposurePrice bean);
  
  
  java.util.List<? extends entity.APDRiskCovPricing> getAllVersions();
  
  
  java.util.List<? extends entity.windowed.APDExposurePriceVersionList> getExposurePrices();
  
  
  
}