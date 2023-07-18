package com.guidewire._generated.productmodel;

@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPTrust.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ScheduledItemHOPTrustSchedImpl extends com.guidewire.pc.domain.coverage.impl.ScheduledItemInternal implements productmodel.ScheduledItemHOPTrustSched {
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> TrusteeAddressValueProvider;
  
  private gw.api.productmodel.SchedulePropertyValueProvider<java.lang.String> TrusteeNameValueProvider;
  
  public ScheduledItemHOPTrustSchedImpl(entity.ScheduledItem scheduledItemEntity)  {
    super(scheduledItemEntity);
    TrusteeNameValueProvider  =  getClause().getPropertyInfosMap().get("HOPTrustSchedTrusteeName").createValueProvider(scheduledItemEntity);
    TrusteeAddressValueProvider  =  getClause().getPropertyInfosMap().get("HOPTrustSchedTrusteeAddress").createValueProvider(scheduledItemEntity);
  }
  
  public productmodel.HOPTrust getClause() {
    return (productmodel.HOPTrust)getScheduledItemEntity().getScheduleParent();
  }
  
  public java.lang.String getTrusteeAddress() {
    return TrusteeAddressValueProvider.getValue();
  }
  
  public java.lang.String getTrusteeName() {
    return TrusteeNameValueProvider.getValue();
  }
  
  public void setTrusteeAddress(java.lang.String trusteeAddress) {
    TrusteeAddressValueProvider.setValue(trusteeAddress);
  }
  
  public void setTrusteeName(java.lang.String trusteeName) {
    TrusteeNameValueProvider.setValue(trusteeName);
  }
  
  
}