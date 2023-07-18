package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgStockCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyCPBldgStockCovValuationMethodTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.CPValuationMethod> implements productmodel.TypekeyCPBldgStockCovValuationMethodType {
  public TypekeyCPBldgStockCovValuationMethodTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CPBldgStockCov getCPBldgStockCov() {
    return (productmodel.CPBldgStockCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CPBldgStockCov getCoverage() {
    return (productmodel.CPBldgStockCov)getClause();
  }
  
  
}