package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_NY.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericPIPNY_EXMEDTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericPIPNY_EXMEDType {
  public GenericPIPNY_EXMEDTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.CAPIP_NY getCAPIP_NY() {
    return (productmodel.CAPIP_NY)getClause();
  }
  
  @java.lang.Override
  public productmodel.CAPIP_NY getCoverage() {
    return (productmodel.CAPIP_NY)getClause();
  }
  
  
}