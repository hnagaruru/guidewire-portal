package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPStructuresRentedToOthersResidencePremisesItem.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class DirectHOPStructuresRentedToOthersResidencePremisesItemLimitTypeImpl extends com.guidewire.pc.api.domain.covterm.DirectCovTermInternal implements productmodel.DirectHOPStructuresRentedToOthersResidencePremisesItemLimitType {
  public DirectHOPStructuresRentedToOthersResidencePremisesItemLimitTypeImpl(gw.api.productmodel.DirectCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPStructuresRentedToOthersResidencePremisesItem getCoverage() {
    return (productmodel.HOPStructuresRentedToOthersResidencePremisesItem)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPStructuresRentedToOthersResidencePremisesItem getHOPStructuresRentedToOthersResidencePremisesItem() {
    return (productmodel.HOPStructuresRentedToOthersResidencePremisesItem)getClause();
  }
  
  
}