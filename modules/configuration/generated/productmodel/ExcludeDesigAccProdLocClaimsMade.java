package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/GLLine/coveragepatterns/ExcludeDesigAccProdLocClaimsMade.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class ExcludeDesigAccProdLocClaimsMade extends entity.GeneralLiabilityExcl {
  protected ExcludeDesigAccProdLocClaimsMade()  {
    super((java.lang.Void)null);
  }
  
  public ExcludeDesigAccProdLocClaimsMade(entity.PolicyPeriod branch)  {
    super(branch, "ExcludeDesigAccProdLocClaimsMade");
  }
  
  public ExcludeDesigAccProdLocClaimsMade(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "ExcludeDesigAccProdLocClaimsMade");
  }
  
  public productmodel.GenericExcludeDescriptionType getExcludeDescriptionTerm() {
    return (productmodel.GenericExcludeDescriptionType)getCovTerm("ExcludeDescription");
  }
  
  public productmodel.TypekeyExcludeTypeAccLocProdType getExcludeTypeAccLocProdTerm() {
    return (productmodel.TypekeyExcludeTypeAccLocProdType)getCovTerm("ExcludeTypeAccLocProd");
  }
  
  public productmodel.GenericExcludedLocAddrType getExcludedLocAddrTerm() {
    return (productmodel.GenericExcludedLocAddrType)getCovTerm("ExcludedLocAddr");
  }
  
  public boolean getHasExcludeDescriptionTerm() {
    return hasCovTerm("ExcludeDescription");
  }
  
  public boolean getHasExcludeTypeAccLocProdTerm() {
    return hasCovTerm("ExcludeTypeAccLocProd");
  }
  
  public boolean getHasExcludedLocAddrTerm() {
    return hasCovTerm("ExcludedLocAddr");
  }
  
  public boolean getHasProdWorkDateTerm() {
    return hasCovTerm("ProdWorkDate");
  }
  
  public boolean getHasProdWorkDateTypeTerm() {
    return hasCovTerm("ProdWorkDateType");
  }
  
  public productmodel.GenericProdWorkDateType getProdWorkDateTerm() {
    return (productmodel.GenericProdWorkDateType)getCovTerm("ProdWorkDate");
  }
  
  public productmodel.TypekeyProdWorkDateTypeType getProdWorkDateTypeTerm() {
    return (productmodel.TypekeyProdWorkDateTypeType)getCovTerm("ProdWorkDateType");
  }
  
  static {
    com.guidewire._generated.productmodel.ExcludeDesigAccProdLocClaimsMadeInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.ExcludeDesigAccProdLocClaimsMade>() {
      public productmodel.ExcludeDesigAccProdLocClaimsMade newEmptyInstance() {
        return new productmodel.ExcludeDesigAccProdLocClaimsMade();
      }
      
      
    });
  }
}