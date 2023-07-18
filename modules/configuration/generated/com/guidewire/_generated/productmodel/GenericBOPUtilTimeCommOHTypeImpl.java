package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPUtilTimeCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBOPUtilTimeCommOHTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericBOPUtilTimeCommOHType {
  public GenericBOPUtilTimeCommOHTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPUtilTimeCov getBOPUtilTimeCov() {
    return (productmodel.BOPUtilTimeCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPUtilTimeCov getCoverage() {
    return (productmodel.BOPUtilTimeCov)getClause();
  }
  
  
}