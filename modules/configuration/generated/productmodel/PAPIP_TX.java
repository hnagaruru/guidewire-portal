package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/PersonalAutoLine/coveragepatterns/PAPIP_TX.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class PAPIP_TX extends entity.PersonalAutoCov {
  protected PAPIP_TX()  {
    super((java.lang.Void)null);
  }
  
  public PAPIP_TX(entity.PolicyPeriod branch)  {
    super(branch, "PAPIP_TX");
  }
  
  public PAPIP_TX(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "PAPIP_TX");
  }
  
  public boolean getHasPAPIPTX_LIMITTerm() {
    return hasCovTerm("PAPIPTX_LIMIT");
  }
  
  public productmodel.OptionPAPIPTX_LIMITType getPAPIPTX_LIMITTerm() {
    return (productmodel.OptionPAPIPTX_LIMITType)getCovTerm("PAPIPTX_LIMIT");
  }
  
  static {
    com.guidewire._generated.productmodel.PAPIP_TXInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.PAPIP_TX>() {
      public productmodel.PAPIP_TX newEmptyInstance() {
        return new productmodel.PAPIP_TX();
      }
      
      
    });
  }
}