package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAUIMBICov.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPAUIMBIstackedTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPAUIMBIstackedType {
  public GenericPAUIMBIstackedTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.PAUIMBICov getCoverage() {
    return (productmodel.PAUIMBICov)getClause();
  }
  
  @java.lang.Override
  public productmodel.PAUIMBICov getPAUIMBICov() {
    return (productmodel.PAUIMBICov)getClause();
  }
  
  
}