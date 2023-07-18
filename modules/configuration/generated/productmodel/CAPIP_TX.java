package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/BusinessAutoLine/coveragepatterns/CAPIP_TX.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class CAPIP_TX extends entity.BAStateCov {
  protected CAPIP_TX()  {
    super((java.lang.Void)null);
  }
  
  public CAPIP_TX(entity.PolicyPeriod branch)  {
    super(branch, "CAPIP_TX");
  }
  
  public CAPIP_TX(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "CAPIP_TX");
  }
  
  public boolean getHasPIPTX_PIPTerm() {
    return hasCovTerm("PIPTX_PIP");
  }
  
  public productmodel.OptionPIPTX_PIPType getPIPTX_PIPTerm() {
    return (productmodel.OptionPIPTX_PIPType)getCovTerm("PIPTX_PIP");
  }
  
  static {
    com.guidewire._generated.productmodel.CAPIP_TXInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.CAPIP_TX>() {
      public productmodel.CAPIP_TX newEmptyInstance() {
        return new productmodel.CAPIP_TX();
      }
      
      
    });
  }
}