package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPScheduledLandlordsFurnishingItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectHOPScheduledLandlordsFurnishingItemTotalLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectHOPScheduledLandlordsFurnishingItemTotalLimitType {
  public DirectHOPScheduledLandlordsFurnishingItemTotalLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPScheduledLandlordsFurnishingItem getCoverage() {
    return (productmodel.HOPScheduledLandlordsFurnishingItem)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPScheduledLandlordsFurnishingItem getHOPScheduledLandlordsFurnishingItem() {
    return (productmodel.HOPScheduledLandlordsFurnishingItem)getClause();
  }
  
  
}