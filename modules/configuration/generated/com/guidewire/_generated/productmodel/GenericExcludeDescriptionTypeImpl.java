package com.guidewire._generated.productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigAccProdLocClaimsMade.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class GenericExcludeDescriptionTypeImpl extends com.guidewire.pc.api.domain.covterm.StringCovTermInternal implements productmodel.GenericExcludeDescriptionType {
  public GenericExcludeDescriptionTypeImpl(gw.api.productmodel.GenericCovTermPattern pattern, entity.Clause clause)  {
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