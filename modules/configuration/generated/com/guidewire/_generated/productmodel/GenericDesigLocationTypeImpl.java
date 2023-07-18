package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigOperations.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericDesigLocationTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericDesigLocationType {
  public GenericDesigLocationTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigOperations getExcludeDesigOperations() {
    return (productmodel.ExcludeDesigOperations)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigOperations getExclusion() {
    return (productmodel.ExcludeDesigOperations)getClause();
  }
  
  
}