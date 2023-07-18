package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPCovE.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericHOPCovEPersonalInjuryTypeImpl extends com.guidewire.pc.api.domain.covterm.BooleanCovTermInternal implements productmodel.GenericHOPCovEPersonalInjuryType {
  public GenericHOPCovEPersonalInjuryTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.HOPCovE getCoverage() {
    return (productmodel.HOPCovE)getClause();
  }
  
  @java.lang.Override
  public productmodel.HOPCovE getHOPCovE() {
    return (productmodel.HOPCovE)getClause();
  }
  
  
}