package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/CPLine/coveragepatterns/CPBldgCov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class TypekeyCPBldgCovValuationMethodTypeImpl extends com.guidewire.pc.api.domain.covterm.TypekeyCovTermInternal<typekey.CPValuationMethod> implements productmodel.TypekeyCPBldgCovValuationMethodType {
  public TypekeyCPBldgCovValuationMethodTypeImpl(gw.api.productmodel.TypekeyCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CPBldgCov getCPBldgCov() {
    return (productmodel.CPBldgCov)getClause();
  }
  
  @java.lang.Override
  public productmodel.CPBldgCov getCoverage() {
    return (productmodel.CPBldgCov)getClause();
  }
  
  
}