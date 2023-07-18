package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigPremises.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericDesigPremisesTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericDesigPremisesType {
  public GenericDesigPremisesTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigPremises getExcludeDesigPremises() {
    return (productmodel.ExcludeDesigPremises)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigPremises getExclusion() {
    return (productmodel.ExcludeDesigPremises)getClause();
  }
  
  
}