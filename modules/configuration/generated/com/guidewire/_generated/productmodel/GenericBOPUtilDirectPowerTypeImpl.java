package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BOPLine/coveragepatterns/BOPUtilDirectCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericBOPUtilDirectPowerTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericBOPUtilDirectPowerType {
  public GenericBOPUtilDirectPowerTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.BOPUtilDirectCov getBOPUtilDirectCov() {
    return (productmodel.BOPUtilDirectCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.BOPUtilDirectCov getCoverage() {
    return (productmodel.BOPUtilDirectCov)getClause();
  }
  
  
}