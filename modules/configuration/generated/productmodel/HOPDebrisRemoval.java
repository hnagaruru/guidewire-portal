package productmodel;

@gw.lang.SimplePropertyProcessing
@javax.annotation.Generated(comments = "config/resources/productmodel/policylinepatterns/HOPLine/coveragepatterns/HOPDebrisRemoval.xml", date = "", value = "com.guidewire.pc.productmodel.codegen.ProductModelCodegen")
public class HOPDebrisRemoval extends entity.HOPDwellingCov {
  protected HOPDebrisRemoval()  {
    super((java.lang.Void)null);
  }
  
  public HOPDebrisRemoval(entity.PolicyPeriod branch)  {
    super(branch, "z2cjsu8d7ldr23ojbnc6es16ti9");
  }
  
  public HOPDebrisRemoval(entity.PolicyPeriod branch, java.util.Date effectiveDate, java.util.Date expirationDate)  {
    super(branch, effectiveDate, expirationDate, "z2cjsu8d7ldr23ojbnc6es16ti9");
  }
  
  static {
    com.guidewire._generated.productmodel.HOPDebrisRemovalInternalAccess.FRIEND_ACCESSOR.init(new com.guidewire.pc.domain.productmodel.ProductModelFriendAccess<productmodel.HOPDebrisRemoval>() {
      public productmodel.HOPDebrisRemoval newEmptyInstance() {
        return new productmodel.HOPDebrisRemoval();
      }
      
      
    });
  }
}