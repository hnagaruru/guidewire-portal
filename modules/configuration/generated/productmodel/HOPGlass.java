package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPGlass.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPGlass extends entity.HOPDwellingCov {
  protected HOPGlass()  {
    super((java.lang.Void)null);
  }
  
  public HOPGlass(entity.PolicyPeriod branch)  {
    super(branch, "zu6i6rdl89rc2cu7inkfbe38b6b");
  }
  
  public HOPGlass(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "zu6i6rdl89rc2cu7inkfbe38b6b");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPGlassInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPGlass>() {
      public productmodel.HOPGlass newEmptyInstance() {
        return new productmodel.HOPGlass();
      }
      
      
    });
  }
}