package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPLiquorEvents.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericLiqLiabEventsDescriptionTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericLiqLiabEventsDescriptionType {
  public GenericLiqLiabEventsDescriptionTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPLiquorEvents getBOPLiquorEvents() {
    return (productmodel.BOPLiquorEvents)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPLiquorEvents getCoverage() {
    return (productmodel.BOPLiquorEvents)getClause();
  }
  
  
}