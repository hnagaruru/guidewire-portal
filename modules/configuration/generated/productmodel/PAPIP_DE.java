package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_DE.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_DE extends entity.PersonalAutoCov {
  protected PAPIP_DE()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_DE(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_DE");
  }
  
  public PAPIP_DE(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_DE");
  }
  
  public boolean getHasPAPIP_DE_Deduct_WhoAppliesTerm() {
    return hasCovTerm("PAPIP_DE_Deduct_WhoApplies");
  }
  
  public boolean getHasPAPIP_DE_DeductibleTerm() {
    return hasCovTerm("PAPIP_DE_Deductible");
  }
  
  public boolean getHasPAPIP_DE_LIMTerm() {
    return hasCovTerm("PAPIP_DE_LIM");
  }
  
  public productmodel.TypekeyPAPIP_DE_Deduct_WhoAppliesType getPAPIP_DE_Deduct_WhoAppliesTerm() {
    return (productmodel.TypekeyPAPIP_DE_Deduct_WhoAppliesType)getCovTerm("PAPIP_DE_Deduct_WhoApplies");
  }
  
  public productmodel.OptionPAPIP_DE_DeductibleType getPAPIP_DE_DeductibleTerm() {
    return (productmodel.OptionPAPIP_DE_DeductibleType)getCovTerm("PAPIP_DE_Deductible");
  }
  
  public productmodel.PackagePAPIP_DE_LIMType getPAPIP_DE_LIMTerm() {
    return (productmodel.PackagePAPIP_DE_LIMType)getCovTerm("PAPIP_DE_LIM");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_DEInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_DE>() {
      public productmodel.PAPIP_DE newEmptyInstance() {
        return new productmodel.PAPIP_DE();
      }
      
      
    });
  }
}