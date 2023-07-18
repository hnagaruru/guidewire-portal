package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigAccProdLocClaimsMade.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericProdWorkDateTypeImpl extends com.guidewire.pc.api.domain.covterm.DateTimeCovTermInternal implements productmodel.GenericProdWorkDateType {
  public GenericProdWorkDateTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
    super(pattern, clause);
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigAccProdLocClaimsMade getExcludeDesigAccProdLocClaimsMade() {
    return (productmodel.ExcludeDesigAccProdLocClaimsMade)getClause();
  }
  
  @java.lang.Override
  public productmodel.ExcludeDesigAccProdLocClaimsMade getExclusion() {
    return (productmodel.ExcludeDesigAccProdLocClaimsMade)getClause();
  }
  
  
}