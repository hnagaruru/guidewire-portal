package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPEmergencyPropertyRemoval.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class OptionHOPPropRemovalTypeImpl extends com.guidewire.pc.api.domain.covterm.OptionCovTermInternal<productmodel.OptionHOPPropRemovalType> implements productmodel.OptionHOPPropRemovalType {
  public OptionHOPPropRemovalTypeImpl(gw.api.productmodel.OptionCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPEmergencyPropertyRemoval getCoverage() {
    return (productmodel.HOPEmergencyPropertyRemoval)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPEmergencyPropertyRemoval getHOPEmergencyPropertyRemoval() {
    return (productmodel.HOPEmergencyPropertyRemoval)getClause();
  }
  
  
}