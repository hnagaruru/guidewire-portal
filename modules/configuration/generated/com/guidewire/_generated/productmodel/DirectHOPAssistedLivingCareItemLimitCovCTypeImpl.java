package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPAssistedLivingCareItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectHOPAssistedLivingCareItemLimitCovCTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectHOPAssistedLivingCareItemLimitCovCType {
  public DirectHOPAssistedLivingCareItemLimitCovCTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPAssistedLivingCareItem getCoverage() {
    return (productmodel.HOPAssistedLivingCareItem)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPAssistedLivingCareItem getHOPAssistedLivingCareItem() {
    return (productmodel.HOPAssistedLivingCareItem)getClause();
  }
  
  
}