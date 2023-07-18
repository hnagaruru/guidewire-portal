package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_MA.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_MA extends entity.PersonalAutoCov {
  protected PAPIP_MA()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_MA(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_MA");
  }
  
  public PAPIP_MA(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_MA");
  }
  
  public boolean getHasPAPIPMA_AIRBAGTerm() {
    return hasCovTerm("PAPIPMA_AIRBAG");
  }
  
  public boolean getHasPAPIPMA_DEDUCTIBLETerm() {
    return hasCovTerm("PAPIPMA_DEDUCTIBLE");
  }
  
  public boolean getHasPAPIPMA_LIMITTerm() {
    return hasCovTerm("PAPIPMA_LIMIT");
  }
  
  public boolean getHasPAPIPMA_WCTerm() {
    return hasCovTerm("PAPIPMA_WC");
  }
  
  public productmodel.GenericPAPIPMA_AIRBAGType getPAPIPMA_AIRBAGTerm() {
    return (productmodel.GenericPAPIPMA_AIRBAGType)getCovTerm("PAPIPMA_AIRBAG");
  }
  
  public productmodel.OptionPAPIPMA_DEDUCTIBLEType getPAPIPMA_DEDUCTIBLETerm() {
    return (productmodel.OptionPAPIPMA_DEDUCTIBLEType)getCovTerm("PAPIPMA_DEDUCTIBLE");
  }
  
  public productmodel.OptionPAPIPMA_LIMITType getPAPIPMA_LIMITTerm() {
    return (productmodel.OptionPAPIPMA_LIMITType)getCovTerm("PAPIPMA_LIMIT");
  }
  
  public productmodel.GenericPAPIPMA_WCType getPAPIPMA_WCTerm() {
    return (productmodel.GenericPAPIPMA_WCType)getCovTerm("PAPIPMA_WC");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_MAInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_MA>() {
      public productmodel.PAPIP_MA newEmptyInstance() {
        return new productmodel.PAPIP_MA();
      }
      
      
    });
  }
}